export type TransactionType = 'payment' | 'refund';

export type TransactionOptions = 'View receipt' | 'Download invoice';

export type TransactionStatus = 'Successful' | 'Refunded';

export interface Transaction {
	transactionId: string;
	ownershipId: string;
	appId: string;
	developerId: string;
	userId: string;
	date: number;
	type: TransactionType;
	amount: number;
	customData?: any;
	feeAmount?: number;
	marketplaceAmount?: number;
	developerAmount?: number;
	recieptUrl?: string;
	invoiceUrl?: string;
}

export interface FullTransaction extends Transaction {
	appName?: string;
	appIcon?: string | any;
	options?: TransactionOptions[];
	status?: TransactionStatus;
}
