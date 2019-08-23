"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorSys {
    constructor() {
        this.errorClass = 'Base';
        this.errorCount = 0;
        this.ok = true;
        this.env = null;
        if (this.env == 'local' || this.env == 'dev') {
            this.ifDevMode = true;
        }
        else {
            this.ifDevMode = false;
        }
        this.errorList = {};
        this.errorDeclareList = {};
        this.devWarningList = {};
        this.warningList = {};
        this.devNoticeList = {};
        this.noticeList = {};
        this.devLogList = {};
    }
    clear() {
        this.ok = true;
        this.errorList = {};
        this.devWarningList = {};
        this.warningList = {};
        this.devNoticeList = {};
        this.noticeList = {};
        this.devLogList = {};
        this.errorCount = 0;
    }
    isOk() {
        return this.ok;
    }
    isDev() {
        return this.ifDevMode;
    }
    decl(keyError, infoError) {
        this.errorDeclareList[keyError] = infoError;
    }
    declare(keyErrorList) {
        for (let i = 0; i < keyErrorList.length; i++) {
            this.errorDeclareList[keyErrorList[i]] = null;
        }
    }
    declareEx(keyErrorList) {
        Object.assign(this.errorDeclareList, keyErrorList);
    }
    error(kError, sError) {
        if (sError) {
            this.ok = false;
            this.errorList[kError] = sError;
        }
        else {
            this.ok = false;
            this.errorList[kError] = kError;
        }
        if (!(kError in this.errorDeclareList)) {
            this.devWarning(kError, 'Отсутствует декларация ошибки');
        }
        this.errorCount++;
    }
    getErrorCount() {
        return this.errorCount;
    }
    setError(kError) {
        this.ok = false;
        this.errorList[kError] = this.errorDeclareList[kError];
        if (!(kError in this.errorDeclareList)) {
            this.devWarning(kError, 'Отсутствует декларация ошибки');
        }
    }
    errorEx(e, kError, sError) {
        this.ok = false;
        this.errorList[kError] = sError;
        if (!(kError in this.errorDeclareList)) {
            this.devWarning(kError, 'Отсутствует декларация ошибки');
        }
    }
    notice(kNotice, sNotice) {
        this.noticeList[kNotice] = sNotice;
    }
    devNotice(kNotice, sNotice) {
        if (this.ifDevMode) {
            this.devNoticeList[kNotice] = sNotice;
            console.log('N:[' + kNotice + '] - ' + sNotice);
        }
    }
    warning(kWarning, sWarning) {
        this.warningList[kWarning] = sWarning;
    }
    devWarning(kWarning, sWarning) {
        if (this.ifDevMode) {
            this.devWarningList[kWarning] = sWarning;
            console.log('W:[' + kWarning + '] - ' + sWarning);
        }
    }
    getErrors() {
        return this.errorList;
    }
    getDeclareList() {
        return this.errorDeclareList;
    }
    getDevDeclare() {
        for (let k in this.errorDeclareList) {
            if (this.errorList[k] && !this.errorDeclareList[k]) {
                this.errorDeclareList[k] = this.errorList[k];
            }
        }
        return this.errorDeclareList;
    }
    getDevWarning() {
        return this.devWarningList;
    }
    getWarning() {
        return this.warningList;
    }
    getDevNotice() {
        return this.devNoticeList;
    }
    getNotice() {
        return this.noticeList;
    }
    getDevLog() {
        return this.devLogList;
    }
}
exports.ErrorSys = ErrorSys;
//# sourceMappingURL=ErrorSys.js.map