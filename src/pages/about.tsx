import Image from "next/image";

const About = () => {
    return ( 
        <>
        {/* Header Section */}
  
        <div className="relative w-full text-white opacity-95">
          <Image
            src="/images/about-header.jpg"
            alt="Header-Image"
            className="w-full "
            width={1200}
            height={600}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="text-[24px] font-medium md:font-bold lg:font-bold text-center lg:text-[60px]">
              About for Bacola
            </p>
            <p className="tracking-widest text-center lg:text-[12px] text-[10px] font-semibold">
              WE CAN DO MORE FOR YOU
            </p>
          </div>
        </div>
        {/* Section -01 */}
        <div className="mx-5 lg:mx-24">
          <div className="container  mt-3 text-[14px]">
            <p className="text-gray-600 md:mt-3 md:text-justify ">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
              lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
              in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
              turpis. Curabitur porta auctor quam, pretium facilisis nisl.
              Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
            </p>
          </div>
          {/* Section-02 */}
          <div className="container lg:px-10 lg:mx-10">
            <p className="lg:pl-5 lg:pr-60 mt-5 text-[28px] lg:text-[32px] font-semibold text-gray-900">
              Quisque erat urna, congue et libero in eleifend euismod velit.
            </p>
            <div>
              <p className="lg:p-5 mx-auto my-3 md:my-5  text-gray-600 text-[14px]">
                In nec purus eget neque accumsan finibus. Duis condimentum elit ut
                libero commodo iaculis. Donec augue diam, tristique et ultricies
                nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
                id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
                metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
                interdum turpis. Curabitur porta auctor quam, pretium facilisis
                nisl. Pellentesque efficitur elit ante, vel vulputate tortor
                blandit nec.
              </p>
            </div>
          </div>
  
          {/* Section-03 */}
          <div className="lg:container lg:flex">
            <div className="lg:relative ">
              <Image
                src="/images/about-people.jpg"
                alt="Bacola-Ceo"
                className="mb-5"
                width={1000}
                height={1000}
              />
            </div>
            <div className="container lg:pt-40 ">
              <div className="lg:ml-10">
                <p className="lg:mx-5 text-gray-900 text-[16px]">
                  Rachel Leonard - Bacola CEO
                </p>
                <p className="lg:ml-5 lg:mr-10 mt-5 text-[28px] font-semibold  gray-900 lg:text-[32px] ">
                  Duis convallis luctus pretium. Pellentesque habitant morbi
                </p>
                <p className="lg:mx-5 mt-5  text-gray-600 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p className=" lg:mx-5 mt-5 text-gray-600 text-[14px]">
                  In fermentum mi ut sapien semper, a sagittis lorem vulputate.
                  Integer gravida, dui eget aliquet tempus, turpis orci vehicula
                  ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
                  lacus, ac volutpat neque. Ut at magna id justo bibendum
                  lobortis. Integer tortor nulla, ultricies et nisi sit amet,
                  interdum dictum felis. In semper laoreet dui vitae pharetra.
                  Etiam sit amet molestie nulla, eu efficitur orci. Praesent
                  rutrum ante justo, eget malesuada ante ornare ac. Ut dignissim
                  blandit urna, eget euismod leo rhoncus nec. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Quisque lobortis libero ante. Nullam in feugiat erat.
                  Aenean sed justo dapibus, sodales nisi ut, fringilla lorem.
                  Vestibulum in orci ac nisl condimentum fermentum at et sem.
                  Curabitur fermentum dolor eu lacus consectetur varius.
                </p>
              </div>
            </div>
            <p className="text-[14px] mt-5  lg:mr-10 md:container lg:absolute lg:pl-16  lg:pr-60 lg:py-10 lg:mt-96  text-gray-600 lg:-translate-y-[-200%] lg:bg-white lg:rounded-md lg:translate-x-[10%] ">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
              lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
              in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
              turpis. Curabitur porta auctor quam, pretium facilisis nisl.
              Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
            </p>
          </div>
  
          {/* Section-04 */}
          <div className="container mb-10 lg:mt-16">
            <div className="mt-5  text-[14px]">
              <p className="mt-3 text-gray-600">
                In fermentum mi ut sapien semper, a sagittis lorem vulputate.
                Integer gravida, dui eget aliquet tempus, turpis orci vehicula
                ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
                lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
                Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
                felis. In semper laoreet dui vitae pharetra. Etiam sit amet
                molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
                eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
                euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Quisque lobortis
                libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
                sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
                condimentum fermentum at et sem. Curabitur fermentum dolor eu
                lacus consectetur varius.
              </p>
            </div>
          </div>
        </div>
      </>
     );
}
 
export default About;