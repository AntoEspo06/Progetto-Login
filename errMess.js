module.exports = {
    notFound: { success: false, message: "User not found" },
    emailRequired: { success: false, message: "Email is required" },
    alreadyVerified: { success: false, message: "Email already verified" },
    successfulResend: { success: true, message: "Verification email resent successfully" },
    successfulSend: { success: true, message: "Password reset email sent successfully" },
    invalidLink: { success: false, message: "Invalid or expired reset link" },
    passwordChanged: { success: true, message: "Password changed successfully" },
    tokenInvalidated: { success: true, message: "Token invalidated" },
    resettedPassword: { success: true, message: "Password reset successfully" },
    verifiedPassword: { success: true, message: "User verified successfully" },
    wrongPassword: { success: false, message: "Incorrect password" },
    userCreated: { success: true, message: "User created successfully" },
    notVerified: { success: false, message: "Email not verified" },
    usedEmail: { success: false, message: "Email already in use" },
    loggedIn: { success: true, message: "Login successful" },
    tokenSet: { success: true, message: "Token set successfully" }
};
