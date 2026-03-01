import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const WAITLIST_KEY = "margg_waitlist_joined";
const WAITLIST_EVENT = "margg:waitlist_joined";

/* ── animations ── */

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

const drawCheck = keyframes`
  to { stroke-dashoffset: 0; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* ── styled ── */

const FormWrapper = styled.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
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
    padding: 14px 120px 14px 16px;
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
  min-width: 0;

  &:hover:not(:disabled) {
    box-shadow: 0px 6px 32px 0px #b095e3a0;
    transform: translateY(-50%) scale(1.02);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
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

/* ── success state ── */

const SuccessWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${fadeIn} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`;

const TickCircle = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }

  svg path {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    animation: ${drawCheck} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`;

const SuccessLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const Input1 = ({
  placeholder = "Enter Email",
  buttonText = "Join the waitlist",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const formWrapperRef = useRef(null);
  const btnRef = useRef(null);
  const btnWidthRef = useRef(null);

  /* Read localStorage flag on mount */
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && localStorage.getItem(WAITLIST_KEY) === "true") {
        setJoined(true);
      }
    } catch { /* SSR / private-browsing guard */ }
  }, []);

  /* Listen for cross-instance sync event */
  useEffect(() => {
    const handler = () => setJoined(true);
    window.addEventListener(WAITLIST_EVENT, handler);
    return () => window.removeEventListener(WAITLIST_EVENT, handler);
  }, []);

  /* Capture button width before loading replaces text with spinner */
  useEffect(() => {
    if (btnRef.current && !btnWidthRef.current) {
      btnWidthRef.current = btnRef.current.offsetWidth;
    }
  });

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
      setLoading(true);
      try {
        await onSubmit(email);
        // Success — persist flag, broadcast to other instances, show success
        try { localStorage.setItem(WAITLIST_KEY, "true"); } catch { /* ignore */ }
        window.dispatchEvent(new Event(WAITLIST_EVENT));
        setJoined(true);
      } catch (err) {
        // Handle specific error types
        if (err.message === "already_registered") {
          setError("This email is already registered");
        } else if (err.message === "already_enrolled") {
          setError("This email is already enrolled in the waitlist");
        } else {
          setError(err.message || "Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  /* ── Already joined ─────────────────────── */
  if (joined) {
    return (
      <FormWrapper ref={formWrapperRef}>
        <SuccessWrap>
          <TickCircle>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#B095E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TickCircle>
          <SuccessLabel>You have already joined the waitlist</SuccessLabel>
        </SuccessWrap>
      </FormWrapper>
    );
  }

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
            disabled={loading}
          />
          <StyledButton
            ref={btnRef}
            type="submit"
            disabled={loading}
            style={loading && btnWidthRef.current ? { width: btnWidthRef.current } : undefined}
          >
            {loading ? <Spinner /> : buttonText}
          </StyledButton>
        </InputWrapper>
      </form>
      <ErrorMessage $show={!!error}>{error}</ErrorMessage>
    </FormWrapper>
  );
};

export default Input1;
