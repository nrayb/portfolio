import Image from 'next/image'

export default function Page() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>This is the best boi!</h1>
      <Image
        src="/Merlin.jpeg"
        alt="Picture of the best boi"
        width={500}
        height={500}
      />
    </div>
  )
}
