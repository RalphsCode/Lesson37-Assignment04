import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import App from "./App";
import TEST_IMAGES from "./_testCommon.js";

// Smoke Test
it("renders without crashing", function() { render(<App />); 

});

// Snapshot Test
it("matches snapshot", function() {
	const {asFragment} = render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />); 
	expect(asFragment()).toMatchSnapshot(); 
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


// Test the left arrow functionality
it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

});

  // Expect the Back Arrow to NOT be present
  it("Expects the Back Arrow to NOT be present", function() {
    const { queryByTestId } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    const  leftArrow = queryByTestId('left-arrow'); 
    const  rightArrow = queryByTestId('right-arrow'); 

    // Expect the Back Arrow to NOT be present
    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
});

// Expect both Forward & Back Arrows to present
it("Expects the Forward & Back Arrow to be present", function() {
  const { container, queryByTestId } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const moveForward = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(moveForward);

  const  rightArrow = queryByTestId('right-arrow');
  const  leftArrow = queryByTestId('left-arrow');  

  // Expect both Forward & Back Arrows to present
  expect(rightArrow).toBeInTheDocument();
  expect(leftArrow).toBeInTheDocument();
});

// Expect the Forward Arrow to NOT be present
it("Expects the Forward Arrow to NOT be present", function() {
    const { container, queryByTestId } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

  // move 2x forward in the carousel
  const moveForward = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(moveForward);
  fireEvent.click(moveForward);

  const  leftArrow = queryByTestId('left-arrow'); 
  const  rightArrow = queryByTestId('right-arrow'); 

  // Expect the Forward Arrow to NOT be present
  expect(rightArrow).not.toBeInTheDocument();  
  expect(leftArrow).toBeInTheDocument();
});


