const User = require("../models/userModel");

const details = async (req, res) => {
    try {


        // Update the user's details field with the data from req.body
        const updatedUser = await User.findByIdAndUpdate(
            req.userId,
            { details: req.body },
            { new: true } // Returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("done")
        res.json({ message: "Details updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user details:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const getDetails = async (req, res, next) => {
    console.log("Request received for user details");
    console.log("Request body:", req.body);

    const { name } = req.body;  // Destructure name from req.body

    if (!name) {
        return next(new Error("Name is required", { status: 400 }));  // Use new Error
    }

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User details fetched successfully", details:user.details });
    } catch (err) {
        console.error("Error fetching user details:", err);
        next(err);  // Pass error to the next middleware
    }
};


module.exports = { details ,getDetails};
