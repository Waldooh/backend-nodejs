const bcrypt = require("bcrypt");

const verifyPassword = async () => {
    const password = "password321";
    const hash = "$2b$10$VfITwLc7Y64PfzKBYzXQIe.rZaDr3tt8mJCrDrexxpilAsGrlIBe2";
    const isMatch = await bcrypt.compare(password, hash);

    console.log("is a match?", isMatch);
};

verifyPassword();