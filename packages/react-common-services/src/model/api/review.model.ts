import { User } from './user.model';

export interface Status {
	value: string;
}

export interface UserReviewModel extends Omit<User, 'permissions' | 'roles'> {
	accountCount: number;
}

export interface ReviewModel {
	rating: number;
	description: string;
	headline: string;
	type?: string;
	customData?: any;
}

export interface CreateReviewRequest extends ReviewModel {
	appId: string;
}

export interface UpdateReviewRequest extends ReviewModel {
	reviewId: string;
}

export interface ReviewResponse extends ReviewModel {
	reviewId: string;
	appId: string;
	userId: string;
	appName: string;
	status: Status;
	appVersion: number;
	reportDate: number | Date;
	user: UserReviewModel;
}

export interface ComponentsUserAccount extends UserReviewModel {
	userAccountId: string;
}
export interface Review {
	reviewId: string;
	appId: string;
	userId: string;
	appName: string;
	status: Status;
	appVersion: number;
	reportDate: number | Date;
	user: UserReviewModel;
	headline: string;
	description: string;
	rating: number;
	userAccountId?: string;
	type?: string;
	userAccount?: ComponentsUserAccount;
	customData?: any;
}
