/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityFeedCreateFormInputValues = {
    content?: string;
    media?: string;
    active?: boolean;
};
export declare type ActivityFeedCreateFormValidationValues = {
    content?: ValidationFunction<string>;
    media?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityFeedCreateFormOverridesProps = {
    ActivityFeedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    media?: PrimitiveOverrideProps<TextAreaFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ActivityFeedCreateFormProps = React.PropsWithChildren<{
    overrides?: ActivityFeedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivityFeedCreateFormInputValues) => ActivityFeedCreateFormInputValues;
    onSuccess?: (fields: ActivityFeedCreateFormInputValues) => void;
    onError?: (fields: ActivityFeedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityFeedCreateFormInputValues) => ActivityFeedCreateFormInputValues;
    onValidate?: ActivityFeedCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityFeedCreateForm(props: ActivityFeedCreateFormProps): React.ReactElement;
