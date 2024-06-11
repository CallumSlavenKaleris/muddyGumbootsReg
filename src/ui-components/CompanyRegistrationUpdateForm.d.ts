/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CompanyRegistration } from "../API.ts";
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
export declare type CompanyRegistrationUpdateFormInputValues = {
    workClass?: string;
    category?: string;
    subCat?: string;
};
export declare type CompanyRegistrationUpdateFormValidationValues = {
    workClass?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    subCat?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyRegistrationUpdateFormOverridesProps = {
    CompanyRegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    workClass?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    subCat?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CompanyRegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyRegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companyRegistration?: CompanyRegistration;
    onSubmit?: (fields: CompanyRegistrationUpdateFormInputValues) => CompanyRegistrationUpdateFormInputValues;
    onSuccess?: (fields: CompanyRegistrationUpdateFormInputValues) => void;
    onError?: (fields: CompanyRegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyRegistrationUpdateFormInputValues) => CompanyRegistrationUpdateFormInputValues;
    onValidate?: CompanyRegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyRegistrationUpdateForm(props: CompanyRegistrationUpdateFormProps): React.ReactElement;
