/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChallengeCreateFormInputValues = {
    name?: string;
    description?: string;
    research?: string;
    design?: string;
    build?: string;
    report?: string;
    point?: number;
};
export declare type ChallengeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    research?: ValidationFunction<string>;
    design?: ValidationFunction<string>;
    build?: ValidationFunction<string>;
    report?: ValidationFunction<string>;
    point?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengeCreateFormOverridesProps = {
    ChallengeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextAreaFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    research?: PrimitiveOverrideProps<TextAreaFieldProps>;
    design?: PrimitiveOverrideProps<TextAreaFieldProps>;
    build?: PrimitiveOverrideProps<TextAreaFieldProps>;
    report?: PrimitiveOverrideProps<TextAreaFieldProps>;
    point?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChallengeCreateFormProps = React.PropsWithChildren<{
    overrides?: ChallengeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChallengeCreateFormInputValues) => ChallengeCreateFormInputValues;
    onSuccess?: (fields: ChallengeCreateFormInputValues) => void;
    onError?: (fields: ChallengeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengeCreateFormInputValues) => ChallengeCreateFormInputValues;
    onValidate?: ChallengeCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengeCreateForm(props: ChallengeCreateFormProps): React.ReactElement;
