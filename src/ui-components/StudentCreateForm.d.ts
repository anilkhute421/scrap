/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    grade?: string;
    hasGroup?: boolean;
    deleted?: boolean;
};
export declare type StudentCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    hasGroup?: ValidationFunction<boolean>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentCreateFormOverridesProps = {
    StudentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<SelectFieldProps>;
    hasGroup?: PrimitiveOverrideProps<SwitchFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StudentCreateFormProps = React.PropsWithChildren<{
    overrides?: StudentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentCreateFormInputValues) => StudentCreateFormInputValues;
    onSuccess?: (fields: StudentCreateFormInputValues) => void;
    onError?: (fields: StudentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentCreateFormInputValues) => StudentCreateFormInputValues;
    onValidate?: StudentCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudentCreateForm(props: StudentCreateFormProps): React.ReactElement;
