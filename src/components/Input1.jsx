import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  max-width: 520px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 440px;
  height: 56px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${(props) => (props.$hasError ? "#FF4D4F" : "#2d2d2d")};
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgba(214, 195, 242, 0.09) 0%,
    rgba(214, 195, 242, 0.36) 100%
  );

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: linear-gradient(
      90deg,
      color(display-p3 0.827 0.769 0.937 / 0.09) 0%,
      color(display-p3 0.827 0.769 0.937 / 0.36) 100%
    );
  }

  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #eee7f966;
  }

  &:focus {
    border-color: ${(props) => (props.$hasError ? "#FF4D4F" : "#d3c4ef")};
  }

  @media (max-width: 640px) {
    padding: 14px 160px 14px 20px;
    font-size: 14px;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 4px;
  top: 50%;
  height: 48px;
  transform: translateY(-50%);
  padding: 12px 24px;
  border: 1px solid #d3c4ef;
  border-radius: 14px;
  background: #ffffff;
  color: #5013c0;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0px 4px 24px 0px #b095e380;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 6px 32px 0px #b095e3a0;
    transform: translateY(-50%) scale(1.02);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  max-height: ${(props) => (props.$show ? "30px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const Input1 = ({
  placeholder = "Enter Email",
  buttonText = "Join the waitlist",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const formWrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formWrapperRef.current &&
        !formWrapperRef.current.contains(event.target)
      ) {
        if (error) {
          setError("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [error]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Call parent onSubmit if provided
    if (onSubmit) {
      try {
        await onSubmit(email);
      } catch (err) {
        // Handle specific error types
        if (err.message === "already_registered") {
          setError("This email is already registered");
        } else if (err.message === "already_enrolled") {
          setError("This email is already enrolled in the waitlist");
        } else {
          setError(err.message || "Something went wrong. Please try again.");
        }
      }
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <FormWrapper ref={formWrapperRef}>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledInput
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={handleChange}
            $hasError={!!error}
          />
          <StyledButton type="submit">{buttonText}</StyledButton>
        </InputWrapper>
      </form>
      <ErrorMessage $show={!!error}>{error}</ErrorMessage>
    </FormWrapper>
  );
};

export default Input1;
