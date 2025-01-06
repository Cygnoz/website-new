import { InputAdornment, TextField } from "@mui/material";
import cygnoz from "../assets/icons/Cygnoz-logo.svg";
import handshake from "../assets/icons/Handshake.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import youtube from "../assets/social/youtube.png";
import tweet from "../assets/social/tweet.png";

function Footer() {
  return (
    <footer className=" bg-[#000C14] text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feedback Section */}
        <div className="bg-[#003A67]  rounded-lg">
          <div className="p-8">
          <h3 className="text-lg font-semibold mb-4 text-[#64C4FF]">
            FEEDBACK
          </h3>
          <h2 className="text-4xl font-normal mb-4">
            <span className="text-gray-400">
              {" "}
              Seeking personalized support?{" "}
            </span>
            Request a call from our team
          </h2>
          <form className="space-y-4">
            <TextField
              id="name"
              label="Your Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: "gray" },
              }}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#003A67",
                  borderRadius: "8px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "#64C4FF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: "gray" },
              }}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#003A67",
                  borderRadius: "8px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "#64C4FF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <button
              type="submit"
              className="bg-[#64C4FF] hover:bg-[#4FAEE7] text-white font-[Gilroy-Regular] py-2 px-6 rounded-full"
            >
              Send Request
            </button>
          </form>
          </div>
          <img
            src={handshake}
            alt="Handshake"
            className=" w-full h-auto object-cover"
          />

          <p className="text-sm mt-5 text-gray-400 p-2">Privacy</p>
        </div>

        {/* Links Section */}
        <div className="space-y-10 md:ms-10">
          <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-4 text-[#64C4FF]">
                QUICK LINKS
              </h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-4 text-[#64C4FF]">
                ABOUT US
              </h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          {/* Contact & Newsletter */}
          <div>
            <div className="mb-10">
              <h4 className="text-lg font-semibold mb-4 text-[#64C4FF]">
                CONTACT US
              </h4>
              <address className="not-italic text-sm leading-6">
                Cygonex Innovations Private Limited, <br />
                NM Arcade, Near All India Radio (AIR), <br />
                NGO Quarters Kakkanad, <br />
                Kochi, Kerala, India <br />
                notify@cygnonex.com <br />
                +91 9544431166
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-10 text-[#64C4FF] ">
                SUBSCRIBE TO OUR NEWSLETTER
              </h4>
              <form className="flex flex-wrap items-center space-x-3">
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "gray" },
                  }}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#000C14",
                      borderRadius: "8px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          type="submit"
                          className="hover:bg-white text-white font-semibold py-2 px-4 rounded-md"
                        >
                          <ArrowForwardIosIcon className="text-red-600" />
                        </button>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "gray",
                      },
                      "&:hover fieldset": {
                        borderColor: "#64C4FF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    // Make it responsive for different screen sizes

                    "@mui/material/styles/breakpoints": {
                      sm: { maxWidth: "100%", position: "relative" }, // Full width for smaller screens
                      md: { maxWidth: "100%", position: "relative" }, // Full width for medium screens
                      lg: { maxWidth: "100%", position: "absolute" }, // Full width for large screens
                    },
                  }}
                />
              </form>
              <div className="flex justify-start mt-10 gap-3">
                <img src={facebook} alt="" className=" rounded-full h-[50px] w-[50px] hover:bg-gray-900" />
                <img src={instagram} alt="" className=" rounded-full h-[50px] w-[50px] hover:bg-gray-900" />
                <img src={youtube} alt="" className=" rounded-full h-[50px] w-[50px] hover:bg-gray-900" />
                <img src={tweet} alt="" className=" rounded-full h-[50px] w-[50px] hover:bg-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Cygnoz Logo */}
        <div className="relative">
          <div className="flex justify-end">
            <img
              src={cygnoz}
              alt="Cygnoz Logo"
              className="w-[150px] h-[126px] sm:w-[120px] sm:h-[102px] md:w-[150px] md:h-[126px] lg:w-[180px] lg:h-[150px]"
            />
          </div>
          <div className="text-center mt-10 sm:mt-5 md:mt-10 lg:mt-10 sm:text-center md:absolute md:bottom-0 md:right-0 md:text-sm lg:text-base">
            <p className="text-gray-500">© 2024 — Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
