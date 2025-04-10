import { Plus } from "lucide-react";
import { useState } from "react";
import { ClanMember } from "../../redux/types";
import { MainModal } from "../Modal/MainModal";
import PrimaryButton from "../shared/primaryButton";

const memberList = [
    { name: "Alex Johnson", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sophia Martinez", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "James Anderson", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Olivia Brown", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Ethan Wilson", image: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const Roaster = ({ players }: { players: ClanMember[] }) => {


    console.log(players);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredMembers = memberList.filter(member =>
        member.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-4 ">
            <PrimaryButton parent="my-2">
                <button onClick={() => setOpen(true)} className="flex items-center">
                    <span>Invite</span> <Plus className="w-4 h-4" />
                </button>
            </PrimaryButton>
            {players?.map((data: ClanMember, idx: number) => (
                <div key={idx} className="flex bg-[#1D1D1D] items-center justify-between p-4 md:p-8 rounded-lg">
                    <div className="flex items-center gap-3">
                        <img src={data.user.profilePicture || ""} alt={`${data.user.userName} logo`} width={40} height={40} className="rounded-full" />
                        <h3 className="text-lg font-semibold">{data.user.userName}</h3>
                    </div>
                    <p>{data.user.id}</p>
                </div>
            ))}
            <MainModal isOpen={open} onClose={() => setOpen(false)}>
                <div className="w-full p-6 text-white rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Invite Members</h2>
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 mb-4 rounded bg-transparent text-white border border-gray-200"
                    />
                    <div className="space-y-4 w-full">
                        {filteredMembers.length > 0 ? (
                            filteredMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center w-full justify-between bg-card_bg p-3 rounded-lg border border-gray-700"
                                >
                                    <div className="flex items-center space-x-3">
                                        <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full border-2 border-gray-500" />
                                        <p className="text-lg font-bold">{member.name}</p>
                                    </div>
                                    <button className="bg-blue-500 px-4 py-2 rounded text-white">Invite</button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">No members found</p>
                        )}
                    </div>
                </div>
            </MainModal>
        </div>
    );
};

export default Roaster;
