import { StatusCode } from "../../model/enum/status-code-enum";

export const errorCodeToMessage = (code: StatusCode) => {
    let errorMessage = "";

    switch (code) {
        case StatusCode.badRequest:
            errorMessage = "Invalid password/email/name"
            break;
        default:
            break;
    }
    return errorMessage;
}