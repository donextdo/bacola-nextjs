const SidebarFilter = ({onClose}:any) => {
    return ( 
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
              <div className="w-full h-full overflow-auto bg-white p-4">
               hi
                <button
                  className="absolute top-4 right-4 text-gray-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>      
     );
}
 
export default SidebarFilter;