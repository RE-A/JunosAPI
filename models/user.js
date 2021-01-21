module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "id"
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            comment: "유저의 이메일"
        },
        password: {
            type: DataTypes.STRING(50),
            comment: "암호화된 유저의 비밀번호"
        },
        verify: {
            type: DataTypes.BOOLEAN,
            comment: "유저 인증 여부"
        }
    }, {
        timestamps: true
    }
    )
}