module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "TempAndHum", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "id"
        },
        temperature: {
            type: DataTypes.FLOAT,
            comment: "측정된 온도"
        },
        humidity: {
            type: DataTypes.FLOAT,
            comment: "측정된 습도"
        }
    }, {
        timestamps: true
    }
    )
}