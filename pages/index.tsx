import X_svg from '@components/cross';
import Footer from '@components/footer';
import classNames from '@lib/classNames';
import randomNumber from '@lib/randomNumber';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [crossBtnPressed, setCrossedBtnPressed] = useState<boolean>(true);
  const [yesYouAredDumb, setYesYouAredDumb] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: Number; y: Number; }>({ x: 0, y: 0 });
  const [numberOfTimesNoBtnPressed, setNumberOfTimesNoBtnPressed] = useState<number>(0);

  const no_button: Function = (): void => {
    const randomX: number = randomNumber(35); // random float b/t (-35 to 35)
    const randomY: number = randomNumber(15); // random float b/t (-15 to 15)
    const noButton: HTMLElement | null = document.getElementById("are_you_dumb");

    setNumberOfTimesNoBtnPressed(oldNumber => oldNumber + 1);
    setPosition({ x: randomX, y: randomY });

    if (numberOfTimesNoBtnPressed === 100 && noButton)
      noButton.innerText = "You pressed it 100 times";

    else if (numberOfTimesNoBtnPressed >= 101 && noButton)
      noButton.innerText = `${numberOfTimesNoBtnPressed} times.`;

    else if (numberOfTimesNoBtnPressed >= 1000 && noButton)
      noButton.innerText = 'You are done now.';

    else if (numberOfTimesNoBtnPressed > 1000 && noButton)
      setYesYouAredDumb(true);
  };

  return (
    <div className='h-full max-w-screen flex justify-start items-center flex-col relative'>
      <Head>
        <title>Are You Dumb?</title>
        <link rel="icon" href="/dumbbell-gym-svgrepo-com.svg" />
        <meta name="title" content="Are You Dumb?" />
      </Head>

      <main className='h-full w-full mx-auto py-6 px-6 sm:px-10 lg:px-8 flex justify-center items-center flex-col'>
        <section className='min-h-[180px] max-w-sm aspect-video w-full border border-gray-400 p-1 shadow-xl'>
          <div className='h-full w-full bg-gray-300 p-1 shadow-xl'>

            <header className='w-full h-11 bg-blue-700 flex'>
              <div className='h-full w-[calc(100%-2.75rem)] flex justify-start items-center px-4'>
                <span className='text-white font-medium tracking-wide'>System message</span>
              </div>
              <div className='h-full w-11 flex justify-center items-center'>
                {
                  crossBtnPressed ?
                    <button
                      className='h-6 w-6 bg-gray-300 border-t-white border-l-white border-r-black border-b-black active:border-b-white active:border-r-white active:border-l-black active:border-t-black hover:shadow-2xl border flex justify-center items-center shadow-2xl'
                      onClick={() => setCrossedBtnPressed(false)}
                    >
                      <X_svg />
                    </button> : <span className='text-xl'>😂</span>
                }
              </div>
            </header>

            <article className='w-full h-[calc(100%-2.75rem)] flex justify-evenly items-center flex-col'>

              <div className='h-1/3 w-full flex justify-center items-center'>
                <span id='are_you_dumb' className='font-semibold text-lg'>{yesYouAredDumb ? "I knew it.!" : "Are you dumb?"}</span>
              </div>
              {!yesYouAredDumb &&
                <div className='h-1/3 w-full flex justify-evenly items-center relative'>
                  <button
                    onClick={() => setYesYouAredDumb(true)}
                    className='h-9 w-20 sm:h-10 sm:w-24 border-2 border-t-white border-l-white border-r-black border-b-black active:border-b-white active:border-r-white active:border-l-black active:border-t-black hover:shadow-2xl shadow-xl font-medium sm:font-semibold'
                  >Yes</button>

                  <button
                    onClick={() => no_button()}
                    className={classNames(
                      'h-9 w-20 sm:h-10 sm:w-24 shadow-xl font-medium sm:font-semibold z-10',
                      'border-2 border-t-white border-l-white border-r-black border-b-black',
                      'active:border-b-white active:border-r-white active:border-l-black active:border-t-black hover:shadow-2xl'
                    )}
                    style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                  >No</button>
                </div>}

            </article>
          </div>
        </section>
      </main>

      <Footer />

    </div >
  );
};

export default Home;