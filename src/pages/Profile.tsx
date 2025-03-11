
import { useState } from "react";
import { User, Settings, Bell, Shield, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    timezone: "Pacific Time (PT)",
    bio: "Sleep enthusiast and wellness advocate. Using EasySleep to improve my sleep quality and overall health."
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="animate-fade-in">
      <div className="container-custom pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-6 flex flex-col items-center text-center border-b border-gray-200 dark:border-gray-800">
                  <div className="w-20 h-20 rounded-full bg-sleep-100 flex items-center justify-center text-sleep-600 mb-3">
                    <User size={36} />
                  </div>
                  <h3 className="font-medium text-lg">{userData.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{userData.email}</p>
                </div>
                <nav className="p-4">
                  <ul className="space-y-1">
                    {[
                      { icon: User, label: "Personal Info", active: true },
                      { icon: Settings, label: "Account Settings" },
                      { icon: Bell, label: "Notifications" },
                      { icon: Shield, label: "Privacy & Security" },
                      { icon: FileText, label: "Sleep Reports" },
                      { icon: HelpCircle, label: "Help & Support" }
                    ].map((item, index) => (
                      <li key={index}>
                        <button 
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                            item.active 
                              ? "bg-sleep-50 text-sleep-600 dark:bg-sleep-900/20 dark:text-sleep-400" 
                              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          }`}
                        >
                          <item.icon size={18} />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="preferences">Sleep Preferences</TabsTrigger>
                  <TabsTrigger value="goals">Sleep Goals</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">Personal Information</h2>
                      {!isEditing ? (
                        <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                          <Button onClick={handleSave}>Save Changes</Button>
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            className="mt-1" 
                          />
                        ) : (
                          <p className="mt-1 text-gray-900 dark:text-gray-100">{userData.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        {isEditing ? (
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className="mt-1" 
                          />
                        ) : (
                          <p className="mt-1 text-gray-900 dark:text-gray-100">{userData.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        {isEditing ? (
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            className="mt-1" 
                          />
                        ) : (
                          <p className="mt-1 text-gray-900 dark:text-gray-100">{userData.phone}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        {isEditing ? (
                          <Input 
                            id="timezone" 
                            name="timezone" 
                            value={formData.timezone} 
                            onChange={handleInputChange} 
                            className="mt-1" 
                          />
                        ) : (
                          <p className="mt-1 text-gray-900 dark:text-gray-100">{userData.timezone}</p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="bio">About Me</Label>
                        {isEditing ? (
                          <Input 
                            id="bio" 
                            name="bio" 
                            value={formData.bio} 
                            onChange={handleInputChange} 
                            className="mt-1" 
                          />
                        ) : (
                          <p className="mt-1 text-gray-900 dark:text-gray-100">{userData.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sleep Preferences</h2>
                    <Separator />
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Smart Alarm</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Wake up during your lightest sleep phase</p>
                        </div>
                        <Switch checked={true} />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Sleep Sounds</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Play calming sounds when going to sleep</p>
                        </div>
                        <Switch checked={true} />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Sleep Reminders</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get reminded when it's time to prepare for sleep</p>
                        </div>
                        <Switch checked={false} />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Sleep Analysis</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive weekly sleep quality reports</p>
                        </div>
                        <Switch checked={true} />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="goals">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sleep Goals</h2>
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <h4 className="font-medium text-sleep-600 mb-2">Hours of Sleep</h4>
                        <p className="text-3xl font-bold">8 hours</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Target sleep duration per night</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <h4 className="font-medium text-sleep-600 mb-2">Sleep Efficiency</h4>
                        <p className="text-3xl font-bold">85%</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Target quality of sleep</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <h4 className="font-medium text-sleep-600 mb-2">Consistent Schedule</h4>
                        <p className="text-3xl font-bold">11:00 PM</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Target bedtime</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <h4 className="font-medium text-sleep-600 mb-2">Wake Up Time</h4>
                        <p className="text-3xl font-bold">7:00 AM</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Target wake up time</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Button>Update Sleep Goals</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
