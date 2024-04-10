import React, { useEffect, useRef, useState } from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import whoWeMet from "../../assets/images/vertical-farm/who-we-met.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import arrowBackward from "../../assets/images/vertical-farm/arrow-backward.png";
import vintagePaper from "../../assets/images/vertical-farm/vintage-paper.png";
import researchPostBox from "../../assets/images/vertical-farm/research-post.png";
import purpleBg from "../../assets/images/vertical-farm/purple-bg.png";
import pinkBg from "../../assets/images/vertical-farm/pink-bg.png";
import uploadThePortrait from "../../assets/images/vertical-farm/upload-the-portrait.png";
import fieldBook from "../../assets/images/vertical-farm/field-book.png";
import vegetables from "../../assets/images/vertical-farm/vegetables.png";
import paper from "../../assets/images/vertical-farm/paper.png";
import mixVeges from "../../assets/images/vertical-farm/mix-veges.png";
import mapFrame from "../../assets/images/vertical-farm/map-frame.png";
import { Link, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  UpdateVerticalFarm,
  createCrop,
  getCrops,
} from "../../features/user/verticalFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function WhoWeMetForm() {
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  const dispatch = useDispatch();
  const [PortraitImage, setPortraitImage] = useState("");
  const [PortraitFile, setPortraitFile] = useState("");
  const [carrotName, setCarrotName] = useState("");
  const [drawImagefirst, setDrawImageFirst] = useState(null);

  const { loading, schools, error, mapImg, verticalFarmData, cropData } =
    useSelector((state) => state.verticalForm);

  const fileInputRef = useRef(null);
  const handleImageUpload = (uplodeType) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (uplodeType === "PortraitImage") {
          setPortraitImage(reader.result);
          setPortraitFile(file);
        } else if (uplodeType === "drawImagefirst") {
          setDrawImageFirst(reader.result);
          const FD = new FormData();
          FD.append("name", carrotName);
          FD.append("image", file);
          FD.append("id", verticalFarmId);
          dispatch(createCrop(FD))
            .then((apiResponse) => {
              if (apiResponse?.payload?.status === 200) {
                setCarrotName("");
                toast.success("submitted");
                setDrawImageFirst('');
              } else if (apiResponse?.payload?.status === 400) {
                setDrawImageFirst('');
                const errorMessage = apiResponse?.payload?.data?.image
                  ? apiResponse?.payload?.data?.image[0]
                  : apiResponse?.payload?.data?.name[0];
                toast.error(errorMessage || "somthing went wrong");
              }
            })
            .catch((error) => {
              toast.error(error?.message || "server error.");
            });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (uplodeType) => () => {
    console.log(uplodeType, "uplodeType");
    if (uplodeType === "PortraitImage") {
      setPortraitImage('');
      setPortraitFile('');
    } else if (uplodeType === "drawImagefirst") {
      setDrawImageFirst('');
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const initialData = {
    name: "",
    age: "",
    scrappySkill: "",
    theyDo: "",
    urbanFarmDes: "",
    growDes: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string(),
    age: Yup.number().min(1, "too short").max(100, "too long"),
    scrappySkill: Yup.string(),
    theyDo: Yup.string(),
    urbanFarmDes: Yup.string(),
    growDes: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    let research = {
      name: values?.name,
      age: +values?.age,
      scrappy_skill: values?.scrappySkill,
      occupation: values?.theyDo,
      why: values?.urbanFarmDes,
      crop: values?.growDes,
    };
    let reseJsonString = JSON.stringify(research);
    let FD = new FormData();
    FD.append("potrait", PortraitFile);
    FD.append("research", reseJsonString);
    FD.append("id", verticalFarmId);
    dispatch(UpdateVerticalFarm(FD))
      .then((apiResponse) => {
        if (apiResponse?.payload?.status === 200) {
          toast.success("submitted");
          setPortraitImage('');
          setPortraitFile('');
          resetForm({ values: "" });
        } else if (apiResponse?.payload?.status === 400) {
          setPortraitImage('');
          setPortraitFile('');
          const errorMessage = apiResponse?.payload?.data?.potrait
            ? apiResponse?.payload?.data?.potrait[0]
            : "somthing went wrong";
          toast.error(errorMessage || "somthing went wrong");
        }
      })
      .catch((error) => {
        toast.error(error?.message || "server error.");
      });
  };

  useEffect(() => {
    dispatch(getCrops(verticalFarmId));
  }, [drawImagefirst]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <VerticalFarmHeader />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Link to={`/field-research/${verticalFarmId}`}>
            <img src={arrowBackward} />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "3",
          }}
        >
          <img
            src={whoWeMet}
            style={{
              width: "325px",
              height: "69px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              paddingTop: "0px",
              marginTop: "20px",
              backgroundImage: `url(${vintagePaper})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "60vw",
            }}
          >
            {/* <p style={{
                            fontSize: "24px",
                            marginTop: "30px",
                            padding: "20px",
                            backgroundColor: "#A6D9FF",
                            borderRadius: "10px"

                        }}>
                            If you can and if you can’t find where you want to build your vertical farm on the map, draw it for us just so we can make sure we can find it and give us good directions to be able to find where you want to build.
                        </p> */}
            <div
              style={{
                backgroundImage: `url(${uploadThePortrait})`,
                backgroundSize: "328px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "328px",
                width: "328px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginTop: "40px",
              }}
            >
              {PortraitImage && (
                <div style={{ position: "absolute", top: 40, right: 35 }}>
                  <button
                    onClick={handleImageRemove("PortraitImage")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
              {PortraitImage ? (
                <img
                  src={PortraitImage}
                  alt="Selected"
                  style={{ wdth: "126px", height: "100px" }}
                />
              ) : (
                <p>Upload their portrait</p>
              )}
            </div>

            <label
              style={{
                backgroundImage: `url(${purpleBg})`,
                backgroundSize: "157px",
                backgroundRepeat: "space",
                backgroundPosition: "center",
                height: "44px",
                width: "157px",
                color: "#fff",
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Upload Image
              <input
                ref={fileInputRef}
                type="file"
                id="upload-input"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload("PortraitImage")}
              />
            </label>

            <img
              src={fieldBook}
              style={{
                height: "99px",
                width: "74px",
                marginTop: "15px",
              }}
            />

            <Formik
              initialValues={initialData}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: "20px",
                      marginBottom: "20px",
                      border: "1px solid #5F6264",
                      borderRadius: "4px",
                      padding: "14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label for="name">Name</label>
                          <input
                            name="name"
                            id="name"
                            style={{
                              textDecoration: "none",
                              backgroundColor: "#00000000",
                              border: "none",
                              outline: "none",
                              border: "1px solid #00000000",
                              borderBottom: "1px solid #000",
                            }}
                            placeholder="Enter Name"
                            value={values.name}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <small className="text-danger mt-2 ms-1 ">
                              {errors.phone}
                            </small>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "20px",
                          }}
                        >
                          <label for="theyDo">What they do?</label>
                          <input
                            name="theyDo"
                            id="theyDo"
                            style={{
                              textDecoration: "none",
                              backgroundColor: "#00000000",
                              border: "none",
                              outline: "none",
                              border: "1px solid #00000000",
                              borderBottom: "1px solid #000",
                            }}
                            placeholder="Type here"
                            value={values.theyDo}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label for="age">Age</label>
                          <input
                            name="age"
                            id="age"
                            style={{
                              textDecoration: "none",
                              backgroundColor: "#00000000",
                              border: "none",
                              outline: "none",
                              border: "1px solid #00000000",
                              borderBottom: "1px solid #000",
                            }}
                            placeholder="Enter Name"
                            value={values.age}
                            onChange={handleChange}
                          />
                          {errors.age && (
                            <small className="text-danger mt-2 ms-1 ">
                              {errors.age}
                            </small>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "20px",
                          }}
                        >
                          <label for="skill">Scrappy Skill</label>
                          <input
                            name="scrappySkill"
                            id="theyDo"
                            style={{
                              textDecoration: "none",
                              backgroundColor: "#00000000",
                              border: "none",
                              outline: "none",
                              border: "1px solid #00000000",
                              borderBottom: "1px solid #000",
                            }}
                            placeholder="Type here"
                            value={values.scrappySkill}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Why they’d like to have an urban vertical urban farm
                        here to play the game
                      </p>
                      <input
                        type="text"
                        name="urbanFarmDes"
                        style={{
                          borderStyle: "dashed",
                          borderRadius: "10px",
                          borderColor: "#393B3C",
                          height: "100px",
                          backgroundColor: "#00000000",
                        }}
                        value={values.urbanFarmDes}
                        onChange={handleChange}
                      />
                    </div>

                    <img
                      src={vegetables}
                      style={{
                        height: "57px",
                        width: "168px",
                        marginTop: "15px",
                      }}
                    />

                    <div
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Three leafy greens, vegetables, fruit they’d like us to
                        grow & why
                      </p>
                      <input
                        type="text"
                        name="growDes"
                        style={{
                          borderStyle: "dashed",
                          borderRadius: "10px",
                          borderColor: "#393B3C",
                          height: "100px",
                          backgroundColor: "#00000000",
                        }}
                        value={values.growDes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Upload the drawings of three things they’d like to eat,
                      that you’ll grow
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* <label
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      1
                    </label> */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundImage: `url(${paper})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "268px",
                        height: "378px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                        }}
                      >
                        <label for="name">Name</label>
                        <input
                          name="carrot"
                          id="name"
                          style={{
                            textDecoration: "none",
                            backgroundColor: "#00000000",
                            border: "none",
                            outline: "none",
                            border: "1px solid #00000000",
                            borderBottom: "1px solid #000",
                          }}
                          placeholder="Enter Name"
                          value={values.carrot}
                          onChange={(e) => setCarrotName(e.target.value)}
                        />
                      </div>
                      <div style={{ position: "relative" }}>
                        <img
                          src={drawImagefirst ? drawImagefirst : mixVeges}
                          style={{
                            height: "150px",
                            width: "150px",
                            marginTop: "20px",
                            border: "1px dotted #6E333B",
                            borderRadius: "6px",
                            padding: "40px",
                          }}
                        />
                        {drawImagefirst && (
                          <div
                            style={{ position: "absolute", top: 35, right: 20 }}
                          >
                            <label
                              onClick={handleImageRemove("drawImagefirst")}
                              style={{
                                background: "none",
                                border: "none",
                                color: "black",
                                cursor: "pointer",
                                fontSize: "12px",
                              }}
                            >
                              Remove
                            </label>
                          </div>
                        )}
                      </div>

                      <label
                        style={{
                          backgroundImage: `url(${purpleBg})`,
                          backgroundSize: "157px",
                          backgroundRepeat: "space",
                          backgroundPosition: "center",
                          height: "44px",
                          width: "157px",
                          color: "#fff",
                          marginTop: "15px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        Upload
                        <input
                          //   ref={fileInputRef}
                          type="file"
                          id="upload-input"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageUpload("drawImagefirst")}
                        />
                      </label>
                    </div>

                    {cropData?.data?.crops?.map((data, index) => {
                      return (
                        <>
                          <label
                            style={{
                              fontSize: "16px",
                            }}
                            key={index}
                          >
                            {index + 1}
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundImage: `url(${paper})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              width: "268px",
                              height: "378px",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "16px",
                                marginTop: "20px",
                              }}
                            >
                              {data?.name}
                            </label>
                            <div style={{ position: "relative" }}>
                              <img
                                src={data?.image ? data?.image : mixVeges}
                                style={{
                                  height: "160px",
                                  width: "160px",
                                  marginTop: "20px",
                                  border: "1px dotted #6E333B",
                                  borderRadius: "6px",
                                  padding: "40px",
                                }}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      style={{
                        backgroundImage: `url(${purpleBg})`,
                        backgroundSize: "157px",
                        backgroundRepeat: "space",
                        backgroundPosition: "center",
                        height: "44px",
                        width: "157px",
                        color: "#fff",
                      }}
                    >
                      Save Details
                    </button>

                    <button
                      type="submit"
                      style={{
                        marginLeft: "20px",
                        backgroundImage: `url(${pinkBg})`,

                        backgroundSize: "157px",
                        backgroundRepeat: "space",
                        backgroundPosition: "center",
                        height: "44px",
                        width: "157px",
                        color: "#fff",
                      }}
                    >
                      Add More Pages
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Link to={`/scrappy-design/${verticalFarmId}`}>
            <img src={arrowForward} />
          </Link>
        </div>
      </div>
    </>
  );
}
