import './App.css'

// Trick to make Bento Grids is col-span rows-span classes

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-6">
      <div className="grid w-full h-full grid-cols-10 grid-rows-4 gap-4">
        <div className="col-span-4 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Featured Work
        </div>
        <div className="col-span-3 xl:col-span-4 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artist Name
        </div>
        <div className="col-span-3 xl:col-span-2 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Photo
        </div>
        <div className="col-span-3 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork 1
        </div>
        <div className="col-span-3 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork 2
        </div>
        <div className="col-span-4 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork 3
        </div>
        <div className="col-span-6 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Contact
        </div>
      </div>
    </div>
  )
}

export default App
