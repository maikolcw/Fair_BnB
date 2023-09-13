import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState
            title="Unauthorized"
            subtitle="Please login"
        />
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
            // client only
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you have no properties."
                />
        );
    }

    return (
        // client only
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
    );
}

export default PropertiesPage;