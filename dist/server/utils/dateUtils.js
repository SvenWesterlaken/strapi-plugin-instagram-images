// @ts-nocheck
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
exports.default = {
    // TODO: we can use data-fns for this
    minute: minute,
    hour: hour,
    day: day,
    checkDate(date) {
        if (date instanceof Date) {
            return date;
        }
        return new Date(date);
    },
    dateDifferenceToNow(date1, unit = this.day) {
        const dateNow = new Date();
        return this.dateDifference(date1, dateNow, unit);
    },
    dateDifference(date1, date2, unit = this.day) {
        const dateOne = this.checkDate(date1);
        const dateTwo = this.checkDate(date2);
        return Math.ceil(Math.abs(dateOne - dateTwo) / unit);
    },
};
