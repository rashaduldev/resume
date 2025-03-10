import { Input } from "../ui/input";

// components/EditProfile.js
const EditProfile = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold">Edit Profile</h2>
        <div className="mt-4">
          <form>
            <div className="space-y-4">
              <div>
                <label className="block">Name</label>
                <Input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block">Email</label>
                <Input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <button type="submit" className="bg-accent text-black px-4 py-2 rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditProfile;
  