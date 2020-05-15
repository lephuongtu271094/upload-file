class DateTimeUtils {
    static getCurrentMsTime() {
        return new Date().getTime();
    }

    static setStartDate(date) {
        date.setHours(0, 0, 0);
        return date.toISOString();
    }

    static setEndDate(date) {
        date.setHours(23, 59, 59);
        return date.toISOString();
    }

    static getDate(data) {
        let startDate;
        let endDate;
        if (!data.startDate) {
            startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        } else {
            startDate = new Date(data.startDate);
        }
        if (!data.endDate) {
            endDate = new Date(Date.now());
        } else {
            endDate = new Date(data.endDate);
        }
        this.setStartDate(startDate);
        this.setEndDate(endDate);

        return { startDate, endDate };
    }

    /**
     * Method: get start date and end date this week
     * @returns starting at 0 am on the first day of the week until 23:59 pm today
     */
    static getThisWeek() {
        const endDate = new Date(Date.now());
        const dayOfWeek = endDate.getDay() - 1;
        const startDate = new Date(Date.now() - dayOfWeek * 24 * 60 * 60 * 1000);

        this.setStartDate(startDate);
        this.setEndDate(endDate);

        return { startDate, endDate };
    }

    /**
     * Method: get start date and end date today
     * @returns From 0 am to 23:59 pm
     */
    static getTodayDate() {
        const startDate = new Date();
        const endDate = new Date();
        DateTimeUtils.setStartDate(startDate);
        DateTimeUtils.setEndDate(endDate);

        return { startDate, endDate };
    }

    /**
     * Method: get list days from start date to end date
     * @param {Date} startDate start date
     * @param {Date} endDate end date
     * @retruns {Array} list days from start date to end date
     */
    static getListDaysByDate(startDate, endDate) {
        const listDate = [];
        const dateMove = startDate;

        while (dateMove < endDate) {
            listDate.push(dateMove.toString());
            dateMove.setDate(dateMove.getDate() + 1);
        }

        return listDate;
    }

    /**
     * Method: get string date
     * @param {String} date want to get string date
     * @returns format DD/MM/YYY
     */
    static getStringDate(date) {
        const newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }
}

export default DateTimeUtils;
