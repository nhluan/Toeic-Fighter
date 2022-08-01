const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const part5AnswerSchema = new Schema(
    {
        test: {
            type: String
        },
        Q1: {
            type:String
        },
        Q2: {
            type:String
        },
        Q3: {
            type:String
        },
        Q4: {
            type:String
        },
        Q5: {
            type:String
        },
        Q6: {
            type:String
        },
        Q7: {
            type:String
        },
        Q8: {
            type:String
        },
        Q9: {
            type:String
        },
        Q10: {
            type:String
        },
        Q11: {
            type:String
        },
        Q12: {
            type:String
        },
        Q13: {
            type:String
        },
        Q14: {
            type:String
        },
        Q15: {
            type:String
        },
        Q16: {
            type:String
        },
        Q17: {
            type:String
        },
        Q18: {
            type:String
        },
        Q19: {
            type:String
        },
        Q20: {
            type:String
        },
        Q21: {
            type:String
        },
        Q22: {
            type:String
        },
        Q23: {
            type:String
        },
        Q24: {
            type:String
        },
        Q25: {
            type:String
        },
        Q26: {
            type:String
        },
        Q27: {
            type:String
        },
        Q28: {
            type:String
        },
        Q29: {
            type:String
        },
        Q30: {
            type:String
        }
        

}
);

module.exports = mongoose.model("part5Answer", part5AnswerSchema);
