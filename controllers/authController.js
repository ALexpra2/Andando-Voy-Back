const admin = require("firebase-admin");
const auth = admin.auth();

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    await auth.createUser({ email, password });
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
};


const loginUser = async (req, res) => {
  const { idToken } = req.body;
  try {
    await auth.verifyIdToken(idToken);
    res.cookie("token", idToken, { httpOnly: true, secure: true}); // En producción usar secure: true
    res.json({ success: true });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
};

module.exports = { 
  registerUser,
  loginUser,
  logoutUser,
};
