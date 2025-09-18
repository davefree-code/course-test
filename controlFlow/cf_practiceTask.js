// Practice Task for Dietary Services
const roleType = "Enrolled Member";

function checkAuth() {
    let authMessage;

    switch(roleType) {
        case "Employee":
            authMessage = "Authorized to view Dietary Services";
            break;
        case "Enrolled Member":
            authMessage = "Authorized to view Dietary Services and can interact with the dietician";
            break;
        case "Subscriber":
            authMessage = "Partial access to facilitate Dietary Services only";
            break;
        default:
            authMessage = "Please enroll or subscribe for access";
    };

      window.alert(`Your role type is: ${roleType} and your access is: ${authMessage}`);

}
