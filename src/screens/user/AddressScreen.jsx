import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { FormElement, Input, Textarea } from "../../styles/form";
import { BaseButtonGreen, BaseButtonWhitesmoke } from "../../styles/button";
import { defaultTheme } from "../../styles/themes/default";

const AddressScreenWrapper = styled.main`
  .form-elem-control {
    padding-left: 16px;
    border: 1px solid ${defaultTheme.color_platinum};

    &:focus {
      border-color: ${defaultTheme.color_silver};
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Account", link: "/account" },
  { label: "Add Address", link: "/account/add" },
];

const AddressScreen = () => {
  return (
    <AddressScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Account"} />
            <h4 className="title-sm">Add Address</h4>
            <form>
              <div className="form-wrapper">
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    First Name*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="First Name"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Last Name*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Last Name"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Contry / Region
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Country/Region"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Company Name*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Company (optional)"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Street Address*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="House number and street name"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Apt, suite, unit*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="apartment, suite, unit,etc. (optional)"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    City*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Town / City"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    State*
                  </label>
                  <select className="form-elem-control" name="" id="">
                    <option value="">State 1</option>
                    <option value="">State 2</option>
                  </select>
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Phone*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Phone"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Postal Code*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Postal Code"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Delivery Instruction
                  </label>
                  <Textarea
                    className="form-elem-control"
                    placeholder="Delivery Instruction"
                    name=""
                    id=""
                  ></Textarea>
                </FormElement>
              </div>
              <FormElement className="form-check-elem flex items-center">
                <div className="form-elem-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark flex items-center justify-center">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>
                <span>Set as default shipping address</span>
              </FormElement>
              <FormElement className="form-check-elem flex items-center">
                <div className="form-elem-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark flex items-center justify-center">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>
                <span>Set as default billing address</span>
              </FormElement>
              <div className="form-btns flex">
                <BaseButtonGreen type="submit">Save</BaseButtonGreen>
                <BaseButtonWhitesmoke type="button">
                  Cancel
                </BaseButtonWhitesmoke>
              </div>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AddressScreenWrapper>
  );
};

export default AddressScreen;
