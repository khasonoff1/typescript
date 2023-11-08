import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Modal } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import Universal from "../../types/universal";
import { getUserPhoto } from "../../utils";
import useAccount from "../../zustand/account";

import "./style.scss";
import Loader from "../../components/Shared/Loader";

const AccountPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Universal>({
    mode: "onTouched",
  });

  const { photoLoad, photo, loading, getUser, updateAccount, uploadPhoto } =
    useAccount();

  useEffect(() => {
    getUser(reset);
  }, [getUser, reset]);

  const submit = async (values: Universal) => {
    Modal.confirm({
      title: "Do you want to change your info?",
      onOk: async () => {
        values.photo = photo;
        updateAccount(values, reset);
      },
    });
  };

  const choosePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = new FormData();
    file.append(
      "file",
      e.target.files instanceof FileList ? e.target.files[0] : ""
    );
    uploadPhoto(file);
  };

  return (
    <div className="container">
      <div className="accountPage">
        <div className="formBox">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <form onSubmit={handleSubmit(submit)} className="accountForm">
                <div className="img-box">
                  <label htmlFor="photo">
                    {photoLoad ? (
                      <LoadingOutlined />
                    ) : photo ? (
                      <img src={getUserPhoto(photo)} alt="avatar" />
                    ) : (
                      <div className="content">
                        <PlusOutlined />
                        <div>upload</div>
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="photo"
                    style={{ display: "none" }}
                    onChange={(e) => choosePhoto(e)}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    style={{
                      borderBottom: `3px solid ${
                        errors.firstName ? "red" : "black"
                      }`,
                    }}
                  />
                  {errors.firstName ? (
                    <p style={{ color: "red" }}>{errors.firstName?.message}</p>
                  ) : null}
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    style={{
                      borderBottom: `3px solid ${
                        errors.lastName ? "red" : "black"
                      }`,
                    }}
                  />
                  {errors.lastName ? (
                    <p style={{ color: "red" }}>{errors.lastName?.message}</p>
                  ) : null}
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    style={{
                      borderBottom: `3px solid ${
                        errors.username ? "red" : "black"
                      }`,
                    }}
                  />
                  {errors.username ? (
                    <p style={{ color: "red" }}>{errors.username?.message}</p>
                  ) : null}
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    style={{
                      borderBottom: `2px solid ${
                        errors.address ? "red" : "black"
                      }`,
                    }}
                  />
                  {errors.address ? (
                    <p style={{ color: "red" }}>{errors.address?.message}</p>
                  ) : null}
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    style={{
                      borderBottom: `3px solid ${
                        errors.email ? "red" : "black"
                      }`,
                    }}
                  />
                  {errors.email ? (
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                  ) : null}
                </div>
                <button type="submit">Submit</button>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
