/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupRegistrationCreateFormInputValues = {
    description?: string;
    category?: string;
};
export declare type GroupRegistrationCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupRegistrationCreateFormOverridesProps = {
    GroupRegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type GroupRegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupRegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupRegistrationCreateFormInputValues) => GroupRegistrationCreateFormInputValues;
    onSuccess?: (fields: GroupRegistrationCreateFormInputValues) => void;
    onError?: (fields: GroupRegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupRegistrationCreateFormInputValues) => GroupRegistrationCreateFormInputValues;
    onValidate?: GroupRegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupRegistrationCreateForm(props: GroupRegistrationCreateFormProps): React.ReactElement;
