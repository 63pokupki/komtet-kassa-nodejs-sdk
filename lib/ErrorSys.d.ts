export declare class ErrorSys {
    errorClass: string;
    private ok;
    private env;
    private ifDevMode;
    private errorList;
    private errorDeclareList;
    private devWarningList;
    private warningList;
    private devNoticeList;
    private noticeList;
    private devLogList;
    private errorCount;
    constructor();
    clear(): void;
    isOk(): boolean;
    isDev(): boolean;
    decl(keyError: string, infoError: string): void;
    declare(keyErrorList: string[]): void;
    declareEx(keyErrorList: {
        [key: string]: string;
    }): void;
    error(kError: string, sError?: string): void;
    getErrorCount(): number;
    setError(kError: string): void;
    errorEx(e: any, kError: string, sError: string): void;
    notice(kNotice: string, sNotice: string): void;
    devNotice(kNotice: string, sNotice: string): void;
    warning(kWarning: string, sWarning: string): void;
    devWarning(kWarning: string, sWarning: string): void;
    getErrors(): {
        [s: string]: string;
    };
    getDeclareList(): {
        [s: string]: string;
    };
    getDevDeclare(): {
        [s: string]: string;
    };
    getDevWarning(): {
        [s: string]: string;
    };
    getWarning(): {
        [s: string]: string;
    };
    getDevNotice(): {
        [s: string]: string;
    };
    getNotice(): {
        [s: string]: string;
    };
    getDevLog(): {
        [s: string]: string;
    };
}
