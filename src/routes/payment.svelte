<script context="module">
    export async function load({ page, fetch, session, context }) {
        return {
            status: 302,
            redirect: `/payment/${page.host}/${page.query}`
        };
    };
</script>