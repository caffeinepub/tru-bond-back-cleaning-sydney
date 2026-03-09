import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  module ServiceType {
    public type ServiceType = {
      #endOfLease;
      #carpetAndFloorCare;
      #tileAndGroutClean;
      #furnitureAndMattressClean;
      #internalCleaning;
      #externalCleaning;
      #handsOnAssistance;
      #pressureCleaning;
    };
  };
  type ServiceType = ServiceType.ServiceType;

  type SubmissionId = Nat;

  module Submission {
    public type Submission = {
      id : SubmissionId;
      fullName : Text;
      email : Text;
      phone : Text;
      address : Text;
      serviceType : ServiceType;
      message : Text;
      timestamp : Time.Time;
    };
  };
  type Submission = Submission.Submission;

  let adminPrincipals = Set.fromIter([Principal.fromText("2vxsx-fae")].values());
  var nextSubmissionId = 1;
  let submissions = Map.empty<SubmissionId, Submission>();

  public shared ({ caller }) func addAdminPrincipal(adminPrincipal : Principal) : async () {
    if (not adminPrincipals.contains(caller)) {
      Runtime.trap("Only existing admin users can register new ones!");
    };
    adminPrincipals.add(adminPrincipal);
  };

  public shared ({ caller }) func submitContactForm(
    fullName : Text,
    email : Text,
    phone : Text,
    address : Text,
    serviceType : ServiceType,
    message : Text,
  ) : async SubmissionId {
    let currentId = nextSubmissionId;
    let entry : Submission = {
      id = currentId;
      fullName;
      email;
      phone;
      address;
      serviceType;
      message;
      timestamp = Time.now();
    };
    submissions.add(currentId, entry);
    nextSubmissionId += 1;
    currentId;
  };

  public query ({ caller }) func getFormSubmission(id : SubmissionId) : async Submission {
    switch (submissions.get(id)) {
      case (?entry) { entry };
      case (null) { Runtime.trap("No submission found for the given id!") };
    };
  };

  public query ({ caller }) func getAllFormSubmissions() : async [Submission] {
    if (not adminPrincipals.contains(caller)) {
      Runtime.trap("Only admin users can view submissions!");
    };
    submissions.values().toArray();
  };
};
