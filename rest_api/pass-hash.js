const bcrypt = require("bcrypt");

const hashPassword = async () => {
    const password = "password321";
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
};

hashPassword();

// $2b$10$VfITwLc7Y64PfzKBYzXQIe.rZaDr3tt8mJCrDrexxpilAsGrlIBe2
