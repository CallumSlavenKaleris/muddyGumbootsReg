/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CompanyRegistrationCreateFormInputValues = {
    workClass?: string;
    category?: string;
    subCat?: string;
};
export declare type CompanyRegistrationCreateFormValidationValues = {
    workClass?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    subCat?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyRegistrationCreateFormOverridesProps = {
    CompanyRegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    workClass?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    subCat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyRegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyRegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyRegistrationCreateFormInputValues) => CompanyRegistrationCreateFormInputValues;
    onSuccess?: (fields: CompanyRegistrationCreateFormInputValues) => void;
    onError?: (fields: CompanyRegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyRegistrationCreateFormInputValues) => CompanyRegistrationCreateFormInputValues;
    onValidate?: CompanyRegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyRegistrationCreateForm(props: CompanyRegistrationCreateFormProps): React.ReactElement;
