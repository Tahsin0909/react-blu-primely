import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import ClanComponents from "../shared/ClanCard/ClanComponents";


import logo from "@/assets/tournament/team-logo.png";
import RecentlyPlayed from './RecentlyPlayed';
const dummyTeams = [
    {
        teamName: "Team 1",
        teamLogo: logo,
        players: [
            {
                name: "Player A",
                discordId: "100",
                avatar: logo,
            },
            {
                name: "Player B1",
                discordId: "2001",
                avatar: logo,
            },
        ],
    },
    {
        teamName: "Team 2",
        teamLogo: logo,
        players: [
            {
                name: "Player A",
                discordId: "100",
                avatar: logo,
            },
            {
                name: "Player B2",
                discordId: "2002",
                avatar: logo,
            },
        ],
    },
];


const ClanAndGame = () => {
    return (
        <div className='relative section-gap'>
            <Tabs defaultValue="solo" className="rounded-lg shadow-md">
                {/* Tabs List */}
                <TabsList className="relative w-96 lg:w-[550px] mx-auto bg-[#1d1d1d] h-14 rounded-full p-1 flex justify-center">
                    <TabsTrigger
                        value="solo"
                        className="flex items-center justify-center gap-1 m-1 w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#fff" d="M7.51 26a5.5 5.5 0 0 1-1.44-.19A5.6 5.6 0 0 1 2.19 19l2.33-8.84a5.54 5.54 0 0 1 2.59-3.43a5.43 5.43 0 0 1 4.15-.54A5.52 5.52 0 0 1 14.7 9h2.6a5.5 5.5 0 0 1 3.44-2.81a5.43 5.43 0 0 1 4.15.54a5.57 5.57 0 0 1 2.59 3.41L29.81 19a5.6 5.6 0 0 1-3.89 6.83a5.43 5.43 0 0 1-4.15-.54a5.54 5.54 0 0 1-2.59-3.41L19 21h-6l-.23.86a5.54 5.54 0 0 1-2.59 3.41a5.46 5.46 0 0 1-2.67.73M9.83 8a3.5 3.5 0 0 0-1.72.46a3.6 3.6 0 0 0-1.66 2.19l-2.33 8.84a3.6 3.6 0 0 0 2.48 4.39a3.43 3.43 0 0 0 2.62-.34a3.54 3.54 0 0 0 1.66-2.19L11.5 19h9l.61 2.35a3.58 3.58 0 0 0 1.66 2.19a3.46 3.46 0 0 0 2.63.34a3.58 3.58 0 0 0 2.47-4.39l-2.33-8.84a3.55 3.55 0 0 0-1.65-2.19a3.46 3.46 0 0 0-2.63-.34a3.55 3.55 0 0 0-2.37 2.22l-.24.66h-5.3l-.24-.66a3.56 3.56 0 0 0-2.38-2.22a3.5 3.5 0 0 0-.9-.12" /><path fill="#fff" d="M10 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-2" /><circle cx="22" cy="12" r="1" fill="#fff" /><circle cx="22" cy="16" r="1" fill="#fff" /><circle cx="20" cy="14" r="1" fill="#fff" /><circle cx="24" cy="14" r="1" fill="#fff" /></svg>
                        SOLO
                    </TabsTrigger>
                    <TabsTrigger
                        value="clan"
                        className="flex items-center justify-center gap-1 m-1 w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M15.1353 12.9653C16.4283 12.0038 17.2713 10.4693 17.2713 8.73757C17.2713 5.83057 14.9066 3.46582 11.9996 3.46582C9.09258 3.46582 6.72783 5.83057 6.72783 8.73757C6.72783 10.4693 7.57083 12.0038 8.86383 12.9653C6.55908 13.7401 4.89258 15.9166 4.89258 18.4786V19.2136C4.89258 20.0851 5.51133 20.8366 6.36408 21.0001C8.21733 21.3548 10.1133 21.5341 12.0003 21.5341C13.8873 21.5341 15.7833 21.3541 17.6373 21.0001C18.4893 20.8366 19.1081 20.0851 19.1081 19.2136V18.4786C19.1066 15.9166 17.4393 13.7401 15.1353 12.9653ZM8.07708 8.73757C8.07708 6.57532 9.83658 4.81582 11.9988 4.81582C14.1611 4.81582 15.9206 6.57532 15.9206 8.73757C15.9206 10.8998 14.1611 12.6593 11.9988 12.6593C9.83658 12.6593 8.07708 10.9006 8.07708 8.73757ZM17.7558 19.2136C17.7558 19.4386 17.5983 19.6328 17.3816 19.6741C13.8423 20.3506 10.1546 20.3506 6.61683 19.6741C6.39933 19.6321 6.24183 19.4386 6.24183 19.2136V18.4786C6.24183 16.0141 8.24658 14.0093 10.7103 14.0093H13.2873C15.7511 14.0093 17.7558 16.0141 17.7558 18.4786V19.2136Z" fill="white" />
                            <path d="M20.2934 12.723C21.1799 11.9175 21.7192 10.7572 21.7192 9.52199C21.7192 7.73999 20.6474 6.16574 18.9892 5.51174C18.6442 5.37599 18.2512 5.54474 18.1139 5.89199C17.9767 6.23849 18.1469 6.63073 18.4942 6.76723C19.6334 7.21648 20.3684 8.29799 20.3684 9.52123C20.3684 10.74 19.6049 11.8515 18.4694 12.2887C18.1814 12.3997 18.0052 12.6915 18.0419 12.9982C18.0779 13.305 18.3179 13.5472 18.6232 13.5877C20.2979 13.809 21.8242 15.546 21.8242 17.2312V17.8087C21.8242 17.919 21.7462 18.0187 21.6397 18.0397C21.5069 18.066 21.3689 18.09 21.2264 18.1147L20.9384 18.165C20.5717 18.2317 20.3287 18.5827 20.3947 18.9495C20.4539 19.2757 20.7382 19.5037 21.0584 19.5037C21.0989 19.5037 21.1387 19.5 21.1799 19.4925L21.4544 19.4445C21.6089 19.4175 21.7597 19.392 21.9022 19.3635C22.6387 19.2187 23.1742 18.5647 23.1742 17.8087V17.2312C23.1742 15.3705 21.9547 13.5727 20.2934 12.723Z" fill="white" />
                            <path d="M3.05997 18.167L2.77197 18.1168C2.63022 18.092 2.49147 18.0688 2.35647 18.041C2.25297 18.0208 2.17422 17.9218 2.17422 17.8108V17.2333C2.17422 15.548 3.69972 13.811 5.37522 13.5898C5.68047 13.5493 5.92122 13.307 5.95647 13.0003C5.99322 12.6935 5.81622 12.4018 5.52897 12.2908C4.39272 11.8535 3.62997 10.7413 3.62997 9.52327C3.62997 8.29927 4.36497 7.21777 5.50422 6.76927C5.85147 6.63202 6.02097 6.23977 5.88447 5.89327C5.74722 5.54602 5.35347 5.37652 5.00922 5.51302C3.35097 6.16702 2.27922 7.74127 2.27922 9.52327C2.27922 10.7578 2.81922 11.9188 3.70497 12.7243C2.04372 13.5733 0.824219 15.371 0.824219 17.2333V17.8108C0.824219 18.5668 1.35972 19.2208 2.09397 19.3648C2.23797 19.394 2.38947 19.4195 2.54397 19.4465L2.81847 19.4945C2.85972 19.502 2.89947 19.5058 2.93997 19.5058C3.26022 19.5058 3.54447 19.277 3.60372 18.9515C3.67047 18.5848 3.42672 18.2338 3.05997 18.167Z" fill="white" />
                        </svg>
                        CLAN
                    </TabsTrigger>
                </TabsList>

                <div className="container section-gap ">


                    {/* Tabs Content */}
                    <TabsContent value="solo">
                        <div className=" rounded-lg shadow-md">
                            <RecentlyPlayed />
                        </div>
                    </TabsContent>
                    <TabsContent value="clan">
                        <div className="rounded-lg shadow-md">
                            <ClanComponents teams={dummyTeams} />
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default ClanAndGame;