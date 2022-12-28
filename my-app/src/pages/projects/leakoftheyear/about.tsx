
function LeakOfTheYearAbout() {
    return (
        <div className="nes-container is-dark is-rounded is-centered me-3 with-title">
            <p className="title">Leak of the Year <span className="text-muted">28/12/22</span></p>
            <p>Pretty bulky project here to also start off Uni. It runs a symfony backend and stores the music files for download.</p>
            <p>Users have accounts with different access levels. They can leave reviews and the score it taken as an average for each leak.</p>
            <p>For Leaked Tapes, the plan is to have different tracklists to review. Since the tracklist is usually fan made. And for induvidual leaks,
                the tab will link to multiple versions. For example; <span className="text-muted">original, released, alternate features, etc.</span>
                These all host their own audio files for playback and download. And their own reviews so each version has it's own average. 
            </p>
            <p>Tapes also ahve tags that can be used to find leaks. For example if you wanted only <span className="text-muted">Lancey Foux</span> leaks, 
            you could search by the tag.</p>
        </div>
    )
}

export default LeakOfTheYearAbout;