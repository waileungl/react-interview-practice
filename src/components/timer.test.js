import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Timer from "./timer";

describe("Timer", () => {
    it("renders with initial state", () => {
        const { getByText, getByRole } = render(<Timer />);
        expect(getByText("10")).toBeInTheDocument();
        expect(getByRole("button")).toHaveTextContent("Pause");
    });

    it("counts down when not paused", () => {
        jest.useFakeTimers();
        const { getByText } = render(<Timer />);
        expect(getByText("10")).toBeInTheDocument();
        jest.advanceTimersByTime(1000);
        expect(getByText("9")).toBeInTheDocument();
        jest.advanceTimersByTime(1000);
        expect(getByText("8")).toBeInTheDocument();
        jest.useRealTimers();
    });

    it("pauses and resumes the timer", () => {
        jest.useFakeTimers();
        const { getByRole, getByText } = render(<Timer />);
        expect(getByText("10")).toBeInTheDocument();
        fireEvent.click(getByRole("button"));
        expect(getByRole("button")).toHaveTextContent("Resume");
        jest.advanceTimersByTime(1000);
        expect(getByText("10")).toBeInTheDocument();
        fireEvent.click(getByRole("button"));
        expect(getByRole("button")).toHaveTextContent("Pause");
        jest.advanceTimersByTime(1000);
        expect(getByText("9")).toBeInTheDocument();
        jest.useRealTimers();
    });
});