# Azure Infrastructure Terraform Templates

> This approach focuses on `setting up the required infrastructure via Terraform`. It allows for source control of not only the solution code, connections, and setups `but also the infrastructure itself`.

<details markdown="1">
<summary><strong>Table of contents</strong></summary>

- [Prerequisites](#prerequisites)
- [Overview](#overview)
- [How to execute it](#how-to-execute-it)

</details>

> E.g With Container App deployment:

<div align="center">
  <img src="https://github.com/user-attachments/assets/5f888442-7fc8-4758-b91b-76e857ba2faa" alt="Centered Image" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/f9d6e876-08a1-43ff-bab0-a1d2fe692b7e" alt="Centered Image" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>

## Prerequisites

- An `Azure subscription is required`. All other resources, including instructions for creating a Resource Group, are provided in this workshop.
- `Contributor role assigned or any custom role that allows`: access to manage all resources, and the ability to deploy resources within subscription.
- Please ensure that:
  - [Terraform is installed on your local machine](https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli#install-terraform).
  - [Install the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) to work with both Terraform and Azure commands.

## Overview

Templates structure:

```
.
├── README.md
├────── main.tf
├────── variables.tf
├────── provider.tf
├────── terraform.tfvars
├────── outputs.tf
```

- main.tf `(Main Terraform configuration file)`: This file contains the core infrastructure code. It defines the resources you want to create, such as virtual machines, networks, and storage. It's the primary file where you describe your infrastructure in a declarative manner.
- variables.tf `(Variable definitions)`: This file is used to define variables that can be used throughout your Terraform configuration. By using variables, you can make your configuration more flexible and reusable. For example, you can define variables for resource names, sizes, and other parameters that might change between environments.
- provider.tf `(Provider configurations)`: Providers are plugins that Terraform uses to interact with cloud providers, SaaS providers, and other APIs. This file specifies which providers (e.g., AWS, Azure, Google Cloud) you are using and any necessary configuration for them, such as authentication details.
- terraform.tfvars `(Variable values)`: This file contains the actual values for the variables defined in `variables.tf`. By separating variable definitions and values, you can easily switch between different sets of values for different environments (e.g., development, staging, production) without changing the main configuration files.
- outputs.tf `(Output values)`: This file defines the output values that Terraform should return after applying the configuration. Outputs are useful for displaying information about the resources created, such as IP addresses, resource IDs, and other important details. They can also be used as inputs for other Terraform configurations or scripts.

## How to execute it

```mermaid
graph TD;
    A[az login] --> B(terraform init)
    B --> C{Terraform provisioning stage}
    C -->|Review| D[terraform plan]
    C -->|Order Now| E[terraform apply]
    C -->|Delete Resource if needed| F[terraform destroy]
```

!!! important
    Please modify `terraform.tfvars` with your information, then run the following flow. If you need more visual guidance, please check the video that illustrates the provisioning steps.

1. **Login to Azure**: This command logs you into your Azure account. It opens a browser window where you can enter your Azure credentials. Once logged in, you can manage your Azure resources from the command line.

    > Go to the path where Terraform files are located:

    ```sh
    cd terraform-infrastructure
    ```

    ```sh
    az login
    ```

    <img width="550" alt="img" src="https://github.com/user-attachments/assets/53b47aa7-134e-4cf7-b0b8-cdebdd0583ed" />

    <img width="550" alt="img" src="https://github.com/user-attachments/assets/1d9a247d-3dc9-472f-9305-4e4f0ecb72f1" />

2. **Initialize Terraform**: Initializes the working directory containing the Terraform configuration files. It downloads the necessary provider plugins and sets up the backend for storing the state.

    ``` sh
    terraform init
    ```

   <img width="550" alt="img" src="https://github.com/user-attachments/assets/a7a32891-ad72-423a-a1fe-bdb50925b546" />

### 3. Terraform provisioning stage

#### Review

Create an execution plan to review the actions Terraform will take using the values in `terraform.tfvars`.

```sh
terraform plan -var-file terraform.tfvars
```

When the command completes successfully, Terraform displays a green confirmation message.

<img width="550" alt="Successful Terraform plan output" src="https://github.com/user-attachments/assets/4741e863-1ccd-4f2a-a0b8-d5d1964bd890">

#### Provision infrastructure

Apply the required changes. Terraform prompts for confirmation before making changes.

```sh
terraform apply -var-file terraform.tfvars
```

<img width="550" alt="Successful Terraform apply output" src="https://github.com/user-attachments/assets/2b32b63f-3e9f-46da-a5e9-c39360135251">

#### Remove infrastructure

Destroy the infrastructure managed by Terraform when it is no longer required.

```sh
terraform destroy -var-file terraform.tfvars
```

<img width="550" alt="Successful Terraform destroy output" src="https://github.com/user-attachments/assets/f2089d03-3a3d-431d-b462-8148ef519104">
