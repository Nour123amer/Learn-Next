"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });

  const validateInputField = (name: string, value: string) => {
    let messageError = "";

    switch (name) {
      case "username":
        if (!value.trim()) {
          messageError = "Username is required";
        } else if (value.length < 3) {
          messageError = "Username must be at least 3 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          messageError = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          messageError = "Email must contain @ character";
        }
        break;
      case "password":
        if (!value.trim()) {
          messageError = "Password is required";
        } else if (value.length < 6) {
          messageError =
            "Password must be at least 6 characters and should contain letters, symbols and numbers";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: messageError,
    }));
  };

  const validateForm = () => {
    setTouched({
      username: true,
      email: true,
      password: true,
    });

    validateInputField("username", formData.username);
    validateInputField("username", formData.email);
    validateInputField("username", formData.password);

    return !errors.username && errors.email && errors.password;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: any) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });
    validateInputField(name, value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("✅ User registered successfully!");
      setFormData({ username: "", email: "", password: "" });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      setError(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }

    if (!validateForm) {
      return;
    }
  };

  return (
    <>
      <div className="sm:w-100 sm:m-5 md:w-[90%] lg:w-[66%] md:mx-auto shadow-2xl md:mt-16">
        <div className="grid grid-cols-12  mx-auto ">
          <div className="sm:col-span-12 lg:col-span-6 sm:px-4 md:px-8 lg:px-12 py-16">
            <h1 className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/gMwxF7xR/Logo-Icon.png"
                alt="Logo-Icon"
              />
              <p className="mb-8 pt-6">Chatplugify</p>
            </h1>
            <h2 className="mb-3">Sign Up</h2>
            <p className="text-[#7B7A7A] mb-2">Join us now and enjoy instant</p>
            {success && (
              <p className="bg-green-200 px-3 py-1.5 rounded-m"> {success}</p>
            )}

            {error && (
              <p className="bg-red-200 px-3 py-1.5 rounded-m"> {error}</p>
            )}

            <form
              action=""
              className="text-[#7B7A7A] mt-6 "
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  value={formData.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-1 border-gray-300 rounded-md px-2 py-1 w-full"
                  type="text"
                  placeholder="Full name"
                  name="username"
                />

                {touched.username && errors.username && (
                  <div className="text-red-600 font-semibold mt-2">
                    *{errors.username}
                  </div>
                )}
              </div>

              <br />
              <div>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  className="border-1 border-gray-300 rounded-md px-2 py-1 w-full"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                {touched.email && errors.email && (
                  <div className="text-red-600 font-semibold mt-2">
                    *{errors.email}
                  </div>
                )}
              </div>
              <br />
              <div>
                <input
                  value={formData.password}
                  onChange={handleChange}
                  className="border-1 border-gray-300 rounded-md px-2 py-1 w-full"
                  type="password"
                  placeholder="Password"
                  name="password"
                />

                {touched.password && errors.password && (
                  <div className="text-red-600 font-semibold mt-2">
                    *{errors.password}
                  </div>
                )}
              </div>
              <br />

              <input type="checkbox" name="agree" id="agree" required />
              <label htmlFor="agree" className="ml-2">
                I agree to the terms & Privacy policy
              </label>
              <br />

              <Button
                type="submit"
                className="mt-6 bg-[#005B63] text-white w-full"
              >
                Sign up
              </Button>
            </form>
            <div className="mt-3 relative ">
              <p className=" before:w-[60px] before:h-[1px] before:bg-gray-200 before:absolute before:left-[10%] before:top-[10px] text-center text-[0.8rem] after:w-[60px] after:h-[1px] after:bg-gray-300 after:absolute after:right-[10%] after:top-[10px] ">
                Or Select Method To Sign Up
              </p>
            </div>
            <div className="flex gap-6 mt-2 items-center justify-between lg:px-8">
              <Link
                href=""
                className="border-2 border-[#005B63] font-semibold py-2 rounded-md text-[#30313E]"
              >
                <button className="text-center flex items-center justify-center w-[160px] gap-2">
                  <img src="https://i.ibb.co/Jw8KhhZ3/bi-facebook.png" alt="" />
                  <span> Geogle</span>
                </button>
              </Link>

              <Link
                href=""
                className="border-2 border-[#005B63]  font-semibold py-2 rounded-md text-[#30313E]"
              >
                <button className="text-center flex items-center justify-center w-[160px] gap-2">
                  <img
                    src="https://i.ibb.co/TMy85Jym/devicon-google.png"
                    alt=""
                  />
                  <span>Facebook</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="sm:col-span-12 lg:col-span-6 bg-[#005B63] flex justify-center items-center">
            <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#005B63] via-white/30 to-transparent] relative px-8 py-14">
              <img
                className="absolute right-22 top-6"
                src="https://i.ibb.co/FkyDZ4GL/Subtract.png"
                alt=""
              />
              <div className=" ml-2 mt-4 ">
                <p className="text-white bg-[#FFFFFF4D] rounded-full py-2 px-1.5 w-fit text-[12px] mb-4">
                  Ready for faster, closer support ?
                </p>
                <p className="bg-[#FFFFFF4D] rounded-full h-[15px] w-[150px] mb-3"></p>
                <p className="bg-[#FFFFFF4D] rounded-full h-[15px] w-[120px]"></p>
              </div>

              <img
                className="absolute left-12 bottom-[33%] "
                src="https://i.ibb.co/FkyDZ4GL/Subtract.png"
                alt=""
              />
              <img
                className="absolute right-[39%] bottom-22 w-[28px] h-[28px]"
                src="https://i.ibb.co/FkyDZ4GL/Subtract.png"
                alt=""
              />
              <img
                className="absolute left-[37%] bottom-8 w-[28px] h-[28px]"
                src="https://i.ibb.co/FkyDZ4GL/Subtract.png"
                alt=""
              />
              <div className="absolute -right-[34%] top-[12%] w-[300px] h-[321px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c4fc/2613/fb11f5a1c6efdebec576aa2b1b255855?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HWv1rX-M8B0HW6Gc05CzIWIvNNNlzoQsOHgTvfJ-oS7fgyvNhYDP41o6XRx0l8yhrwyUe1mo1OTsoJgnrzwRai2OALjo0VZp6~4CsDViuOTDtnQXSK0oUIgctM7~BDtBUHQwak5Za2kX0BfP~w~BGv2PVZjQoukLfNd9pqZQ4juUj37BYUOtEzY5ZFLV1HSNrf4kYGHUV29vZ-XXlXMB9ShGYn3YizV88-jAXnW0Q~dIZDFG5rgqg6HjUSZvPwPr~cwh4dx0Bz1XJulifGq7Exab8RHfgNvNn4XIILvC9mz5vfWdf~AI8H3TBqpktTij3nbs8TYSgs6ryIVMNVQVaA__"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
