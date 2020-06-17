import { UserRole } from "../model/domain/userRole";

export class UserAccessController {
    constructor(public roleLong: string) { }
    // Dispatch Options
    public canUserAccessDispatchQuoteInfo(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserCreateDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserFinaliseDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserAllocateDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserRejectDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserPickupDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserUpliftDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserOffloadDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserDeliverDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
        }
        return false;
    }
    public canUserAcceptDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return false;
                break;
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return true;
                break;
        }
        return false;
    }
    public canUserAddDocumentsDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserAddSignaturesDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return false;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
        }
        return false;
    }
    public canUserImportCsvDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserImportJsonDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserCancelDispatch(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }

    public canUserEditDispatchReferences(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatchDeliveryDetails(): boolean {
        switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatchDetails(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatchConsignmentItems(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatchMoves(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }
    public canUserEditDispatchAttachments(): boolean {
        return true;
    }
    public canUserEditDispatchComments(): boolean {
        return true;
    }
    public canUserAccessDispatch(): boolean {
        return true;
    }
    public canUserDeleteDispatch(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }

    // Quote Options
    public canUserAccessQuoteOptions(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }

    public canUserAccessAdminQuoteTools(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }

    // Rating Options
    public canUserAccessRatingOptions(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }
    // Admin Options
    public canUserAccessCompanyOptions(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }

    public canUserAccessUserOptions(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DRIVER.long:
                return false;
                break;
        }
        return false;
    }
    // Settings Options
    public canUserAccessSettingsOptions(): boolean {
         switch (this.roleLong) {
            case UserRole.ROLE_TYPE.ADMIN.long:
            case UserRole.ROLE_TYPE.ADMIN_ORIGIN.long:
            case UserRole.ROLE_TYPE.DISPATCHER_ADMIN.long:
                return true;
                break;
            case UserRole.ROLE_TYPE.DRIVER.long:
            case UserRole.ROLE_TYPE.CUSTOMER.long:
            case UserRole.ROLE_TYPE.DISPATCHER.long:
                return false;
                break;
        }
        return false;
    }
}
