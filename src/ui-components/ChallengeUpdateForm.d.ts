/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Challenge } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChallengeUpdateFormInputValues = {
    name?: string;
    description?: string;
    research?: string;
    design?: string;
    build?: string;
    report?: string;
    point?: number;
};
export declare type ChallengeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    research?: ValidationFunction<string>;
    design?: ValidationFunction<string>;
    build?: ValidationFunction<string>;
    report?: ValidationFunction<string>;
    point?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengeUpdateFormOverridesProps = {
    ChallengeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextAreaFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    research?: PrimitiveOverrideProps<TextAreaFieldProps>;
    design?: PrimitiveOverrideProps<TextAreaFieldProps>;
    build?: PrimitiveOverrideProps<TextAreaFieldProps>;
    report?: PrimitiveOverrideProps<TextAreaFieldProps>;
    point?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChallengeUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChallengeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    challenge?: Challenge;
    onSubmit?: (fields: ChallengeUpdateFormInputValues) => ChallengeUpdateFormInputValues;
    onSuccess?: (fields: ChallengeUpdateFormInputValues) => void;
    onError?: (fields: ChallengeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengeUpdateFormInputValues) => ChallengeUpdateFormInputValues;
    onValidate?: ChallengeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengeUpdateForm(props: ChallengeUpdateFormProps): React.ReactElement;
