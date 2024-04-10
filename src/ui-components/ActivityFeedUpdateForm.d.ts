/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivityFeed } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityFeedUpdateFormInputValues = {
    content?: string;
    media?: string;
    active?: boolean;
};
export declare type ActivityFeedUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
    media?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityFeedUpdateFormOverridesProps = {
    ActivityFeedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    media?: PrimitiveOverrideProps<TextAreaFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ActivityFeedUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivityFeedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityFeed?: ActivityFeed;
    onSubmit?: (fields: ActivityFeedUpdateFormInputValues) => ActivityFeedUpdateFormInputValues;
    onSuccess?: (fields: ActivityFeedUpdateFormInputValues) => void;
    onError?: (fields: ActivityFeedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityFeedUpdateFormInputValues) => ActivityFeedUpdateFormInputValues;
    onValidate?: ActivityFeedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityFeedUpdateForm(props: ActivityFeedUpdateFormProps): React.ReactElement;
