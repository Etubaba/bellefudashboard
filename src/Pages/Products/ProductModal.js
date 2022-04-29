import React from "react";

import { IconButton, Modal, Tooltip, Box, Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    id: 1,
    label: "Bird",
    imgPath:
      "https://cdn6.f-cdn.com/contestentries/1301217/27758306/5acbe984b11d9_thumb900.jpg",
  },
  {
    id: 2,
    label: "ID card ",
    imgPath:
      "https://sb.kaleidousercontent.com/67418/800x533/c5b0716f3d/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb.jpg",
  },
];

const ProductModal = ({ open, setOpen, id, productDetails, status, title }) => {
  return (
    <div>
      <Modal
        key={id}
        hideBackdrop
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ opacity: 0.9 }}
      >
        <div
          style={{
            zIndex: 1000,
            maxWidth: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1%",
            position: "relative",
          }}
        >
          <div style={{ backgroundColor: "white" }}>
            <div
              style={{
                backgroundColor: "#76BA1B",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "70px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "-5px",
                }}
              >
                {title}
              </h1>
              <Box
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "white" },
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  marginTop: "-15px",
                  marginRight: "10px",
                }}
                onClick={() => setOpen(false)}
              >
                <Icons.CloseOutlined
                  style={{
                    fontSize: "40px",
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                  }}
                />
              </Box>
            </div>

            <div
              style={{
                marginTop: "-12px",
                height: "380px",
              }}
            >
              {/* image slider starts here */}
              <div>
                <Carousel showThumbs={false} internal={4000} showStatus={false}>
                  {images.map((image) => (
                    <img
                      loading="lazy"
                      src={image.imgPath}
                      key={image.id}
                      style={{
                        width: "100%",
                        height: "380px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Carousel>
              </div>
              {/* image slider ends here */}
            </div>
          </div>

          {/* second row */}
          <div style={{ backgroundColor: "white" }}>
            <h1
              style={{
                backgroundColor: "#76BA1B",
                paddingLeft: "5px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "18px",
                color: "white",
                marginTop: 0,
              }}
            >
              Details
            </h1>
            <div
              style={{
                marginTop: "-12px",
                height: "250px",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {/* left side */}
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icons.Title sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Title
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {productDetails.title}
                    </span>
                  </p>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-40px",
                  }}
                >
                  <Icons.Category sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Category
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {productDetails.category}
                    </span>
                  </p>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-40px",
                  }}
                >
                  <Icons.LocationOnOutlined sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Location
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {productDetails.country}
                    </span>
                  </p>
                </p>
              </div>
              {/* right side */}
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icons.CardMembership sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Plans
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {productDetails.planname}
                    </span>
                  </p>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-40px",
                  }}
                >
                  <Icons.Class sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Subcategory
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {productDetails.subcategory}
                    </span>
                  </p>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-40px",
                  }}
                >
                  <Icons.DateRange sx={{ color: "#FFA500" }} />
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Date
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {moment(productDetails.created_at).format("d-M-Y")}
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* third row */}
          {status === "pending" && (
            <div
              style={{
                backgroundColor: "#76BA1B",
                paddingLeft: "5px",
                fontSize: "18px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Tooltip title="Approve">
                <IconButton>
                  <Icons.AddTaskOutlined
                    sx={{ color: "white", fontSize: "30px" }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton>
                  <Icons.DeleteOutlined
                    sx={{ color: "red", fontSize: "30px" }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          )}
          {status === "active" && (
            <div
              style={{
                backgroundColor: "#76BA1B",
                paddingLeft: "5px",
                fontSize: "18px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Tooltip title="Delete">
                <IconButton>
                  <Icons.DeleteOutlined
                    sx={{ color: "red", fontSize: "30px" }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
