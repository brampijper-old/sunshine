const crypto = require('crypto');

function storePassword(user, options) {
    if (!user.changed('password')) {
        return;
    }
    return user.setDataValue('password', hashedPassword(user.password))
}

function hashedPassword(password) {
    return crypto
        .pbkdf2Sync(password, '8', 100000, 64, 'sha512')
        .toString('hex');
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        adress: {
            type: DataTypes.JSONB
        }
    },
    {
        hooks: {
            beforeSave: storePassword,
            beforeUpdate: storePassword,
            beforeSave: storePassword,
        }
    })

    User.prototype.comparePassword = function (password) {
        return hashedPassword(password) === this.password
    }
    return User
}
