import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="mex-md:hidden"/>
        <span className="orange_gradient text-center"> AI-Powerd Prompots</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>
  )
}
