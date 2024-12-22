'use client'

import { useState } from 'react'
import { MessageCircle, Video, MoreHorizontal, Phone, Search, ChevronDown, Plus, Tags, Info, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Random profile photo generator function
const getRandomProfilePhoto = (name: string) => {
  const cleanName = name.replace(/\s+/g, '+')
  return `https://ui-avatars.com/api/?name=${cleanName}&background=random&color=fff`
}

export default function ChatDashboard() {
  const [selectedTab, setSelectedTab] = useState('messages')

  // Sample user data with random profile photos
  const users = [
    { 
      name: "Oğuz Yağız Kara", 
      email: "oguz@bluereceipt.com", 
      lastMessage: "I keep getting error while creating a...",
      time: "5m"
    },
    { 
      name: "George Klein", 
      email: "george@example.com", 
      lastMessage: "Wow, this is really epic man! Thank...",
      time: "54m"
    },
    { 
      name: "Ergad Bagbag", 
      email: "ergad@example.com", 
      lastMessage: "There will be changes to next week's...",
      time: "4h"
    }
  ]

  return (
    <div className="h-screen flex">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={getRandomProfilePhoto("BlueChat")} alt="BlueChat" />
                <AvatarFallback>BC</AvatarFallback>
              </Avatar>
              <span className="font-semibold">BlueChat</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="messages" className="flex-1">Messages</TabsTrigger>
              <TabsTrigger value="segments" className="flex-1">Segments</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-2 p-4">
            {users.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={getRandomProfilePhoto(user.name)} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.lastMessage}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{user.time}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={getRandomProfilePhoto("Oğuz Yağız Kara")} alt="Oğuz Yağız Kara" />
              <AvatarFallback>OY</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Oğuz Yağız Kara</div>
              <div className="text-sm text-muted-foreground">oguz@bluereceipt.com</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={getRandomProfilePhoto("Oğuz Yağız Kara")} alt="Oğuz Yağız Kara" />
                <AvatarFallback>OY</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Oğuz Yağız Kara</span>
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
                <div className="rounded-lg bg-accent p-3">
                  I keep getting error while creating a new pop up for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Smart Response Detected!</span>
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Select</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={getRandomProfilePhoto("AI Assistant")} alt="AI Assistant" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Assistant</span>
                  <span className="text-xs text-muted-foreground">12:52 PM</span>
                </div>
                <div className="rounded-lg bg-primary text-primary-foreground p-3">
                  Hey, <span className="text-primary-foreground/80">#firstname</span>! I saw you were curious about our products. My name is X from StoreNinja, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2 flex-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={getRandomProfilePhoto("Ethan Kenter")} alt="Ethan Kenter" />
                  <AvatarFallback>EK</AvatarFallback>
                </Avatar>
                <span className="text-sm">@Ethan Kenter</span>
                <span className="text-sm text-muted-foreground">Product purchased!</span>
                <Badge variant="secondary">$49</Badge>
                <span className="text-sm">SNOW™ TEETH WHITENING KIT</span>
              </div>
              <span className="text-sm text-muted-foreground">2m ago</span>
            </div>
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={getRandomProfilePhoto("Oğuz Yağız Kara")} alt="Oğuz Yağız Kara" />
                <AvatarFallback>OY</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Oğuz Yağız Kara</div>
                <div className="text-sm text-muted-foreground">11:59pm in Ankara, Turkey</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Button variant="ghost" className="flex flex-col items-center">
              <Phone className="h-4 w-4 mb-1" />
              <span className="text-xs">Call</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <Video className="h-4 w-4 mb-1" />
              <span className="text-xs">Video</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <MoreHorizontal className="h-4 w-4 mb-1" />
              <span className="text-xs">More</span>
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">Revenue</div>
              <div className="text-xl font-bold">$3,452</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">Web Visits</div>
              <div className="text-xl font-bold">42</div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">Information</div>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="text-sm">oguzyagiz@gmail.com</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="text-sm">+90 535 444 81 77</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">Last Visited</div>
              <div className="text-sm">8 Aug, 2021</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Tags</div>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Abandoned Cart User</Badge>
              <Badge variant="secondary">Popup</Badge>
              <Badge variant="secondary">Shop Error</Badge>
              <Badge variant="secondary">Successful</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

